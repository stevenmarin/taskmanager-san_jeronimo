/*
 * Register View
 *
 * Responsabilidad:
 * - Mostrar la interfaz de registro.
 * - Capturar las acciones del usuario.
 * - Informar esas acciones al Presenter.
 *
 * NO contiene lógica de registro.
 */

export function showRegisterView(container, presenter) {
    container.innerHTML = `
        <section class="auth-container">
            <div class="auth-card">

                <header class="auth-header">
                    <h1>Crear cuenta</h1>
                    <p>Regístrate para comenzar IE San Jeronimo</p>
                </header>

                <form id="register-form" class="auth-form">

                    <div class="form-group">
                        <label for="register-institucion">
                            Institución Educativa
                        </label>

                        <select
                            type="text"
                            id="register-institucion"
                            name="institucion"
                            required>
                            <option value="">Selecciona tu institución educativa</option>
                            <option value="SanJeronimo">IE San Jeronimo</option>
                            <option value="otro">Otra</option>
                        </select>
                    </div>


                    <div class="form-group">
                        <label for="register-name">
                            Nombre
                        </label>

                        <input
                            type="text"
                            id="register-name"
                            name="name"
                            placeholder="Tu nombre"
                            required
                        >
                    </div>

                    <div class="form-group">
                        <label for="register-tipoUsuario">
                            Tipo de usuario
                        </label>

                        <select
                            type="text"
                            id="register-tipoUsuario"
                            name="tipoUsuario"
                            required>
                            <option value="">Selecciona un tipo de usuario</option>
                            <option value="profesor">Profesor</option>
                            <option value="estudiante">Estudiante</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="register-genero">
                            Genero
                        </label>

                        <select
                            type="text"
                            id="register-genero"
                            name="genero"
                            required>
                            <option value="">Selecciona tu genero</option>
                            <option value="hombre">Hombre</option>
                            <option value="mujer">Mujer</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="register-email">
                            Correo electrónico
                        </label>

                        <input
                            type="email"
                            id="register-email"
                            name="email"
                            placeholder="correo@ejemplo.com"
                            required
                        >
                    </div>

                    <div class="form-group">
                        <label for="register-password">
                            Contraseña
                        </label>

                        <input
                            type="password"
                            id="register-password"
                            name="password"
                            placeholder="Crea una contraseña"
                            required
                        >
                    </div>

                    <div class="form-group">
                        <label for="check">Activo</label>
                        <input type="checkbox" id="check" name="check" value="si" checked>
                    </div>

                    <button
                        type="submit"
                        class="btn btn-success"
                    >
                        Crear cuenta
                    </button>

                </form>

                <div class="auth-footer">

                    <p>¿Ya tienes una cuenta?</p>

                    <button
                        id="show-login"
                        class="button button-link"
                        type="button"
                    >
                        Iniciar sesión
                    </button>

                </div>

                <p
                    id="register-message"
                    class="form-message"
                ></p>

            </div>

                 <!-- Modal -->
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Confirmar Usuario</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p><strong>Institución Educativa:</strong> <span id="confirmIE"></span></p>
                    <p><strong>Nombre:</strong> <span id="confirmName"></span></p>
                    <p><strong>Tipo de Usuario:</strong> <span id="confirmUser"></span></p>
                    <p><strong>Genero:</strong> <span id="confirmGenero"></span></p>
                    <p><strong>Correo:</strong> <span id="confirmEmail"></span></p>
                    <p><strong>Contraseña:</strong> <span id="confirmPassword"></span></p>
                    <p><strong>Estado:</strong> <span id="confirmEstado"></span></p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    <button type="button" id="btnConfirmar" class="btn btn-primary">Confirmar</button>
                </div>
                </div>
            </div>
            </div>

        </section>
    `;

     const registerForm =
        document.getElementById("register-form");

    registerForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(registerForm);
        const modalElemento = document.getElementById("staticBackdrop");
        const modal = new bootstrap.Modal(modalElemento);
        const userData = {
            institucion: formData.get("institucion"),
            name: formData.get("name"),
            tipoUsuario: formData.get("tipoUsuario"),
            genero: formData.get("genero"),
            email: formData.get("email"),
            password: formData.get("password"),
            check: formData.get("check")
        };
        document.getElementById("confirmIE").textContent = userData.institucion;
        document.getElementById("confirmName").textContent = userData.name;
        document.getElementById("confirmUser").textContent = userData.tipoUsuario;
        document.getElementById("confirmGenero").textContent = userData.genero;
        document.getElementById("confirmEmail").textContent = userData.email;
        document.getElementById("confirmPassword").textContent = "******";
        document.getElementById("confirmEstado").textContent = userData.check;

        registerForm.dataset.userData = JSON.stringify(userData);

        modal.show();
        //presenter.register(userData);
    });
    document.getElementById("btnConfirmar").addEventListener("click", () => {
    const userData = JSON.parse(registerForm.dataset.userData);

    presenter.register(userData);
    const modalId = document.getElementById("staticBackdrop");
    const modal = bootstrap.Modal.getOrCreateInstance(modalId);
    modal.hide();
});
    
    const loginButton =
        document.getElementById("show-login");

    loginButton.addEventListener("click", () => {
        presenter.showLogin();
    });
}

export function showRegisterMessage(message, alert="success") {
    const messageElement =
        document.getElementById("register-message");

    if (messageElement) {
        messageElement.innerHTML = `
        <div class="alert alert-${alert}" role="alert">
            ${message}
        </div>
        `
    }
}