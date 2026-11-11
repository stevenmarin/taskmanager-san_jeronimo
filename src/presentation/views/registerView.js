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
                        <label for="register-tipoUsuario">
                            Institución Educativa
                        </label>

                        <select
                            type="text"
                            id="register-institucion"
                            name="institucion"
                            required>
                            <option value="">Selecciona tu institución educativa</option>
                            <option value="profesor">IE San Jeronimo</option>
                            <option value="estudiante">Otra</option>
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
                        <label for="register-tipoUsuario">
                            Genero
                        </label>

                        <select
                            type="text"
                            id="register-genero"
                            name="genero"
                            required>
                            <option value="">Selecciona tu genero</option>
                            <option value="profesor">Hombre</option>
                            <option value="estudiante">Mujer</option>
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
                        class="button button-primary"
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
        </section>
    `;

    const registerForm =
        document.getElementById("register-form");

    registerForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(registerForm);

        const userData = {
            name: formData.get("name"),
            institucion: formData.get("institucion"),
            tipoUsuario: formData.get("tipoUsuario"),
            genero: formData.get("genero"),
            email: formData.get("email"),
            check: formData.get("check"),
            password: formData.get("password")
        };
        debugger;
        presenter.register(userData);
    });

    const loginButton =
        document.getElementById("show-login");

    loginButton.addEventListener("click", () => {
        presenter.showLogin();
    });
}

export function showRegisterMessage(message) {
    const messageElement =
        document.getElementById("register-message");

    if (messageElement) {
        messageElement.textContent = message;
    }
}