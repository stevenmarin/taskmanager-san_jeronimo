/*
 * User Entity
 *
 * Representa un usuario dentro del dominio
 * de la aplicación.
 *
 * Esta clase NO sabe:
 * - cómo se guarda el usuario
 * - dónde se guarda
 * - cómo funciona Firestore
 * - cómo funciona LocalStorage
 * - cómo funciona la interfaz
 */

export class User {

    constructor({
        id = null,
        name,
        genero,
        tipoUsuario,
        institucion,
        email,
        check,
        passwordHash = null
    }) {
        this.id = id;
        this.name = name;
        this.tipoUsuario = tipoUsuario;
        this.institucion = institucion;
        this.genero = genero;
        this.email = email;
        this.check = check;
        this.passwordHash = passwordHash;
    }
}