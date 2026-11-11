/*
 * Register User Use Case
 *
 * Contiene las reglas necesarias para
 * registrar un nuevo usuario.
 */

import { User } from "../entities/User.js";

export class RegisterUser {

    constructor(userRepository, passwordHasher) {
        this.userRepository = userRepository;
        this.passwordHasher = passwordHasher;
    }

    async execute(user) {
        debugger;
        const existingUser =
            await this.userRepository.findByEmail(user.email);
        debugger;
        if (existingUser) {
            throw new Error(
                "Ya existe un usuario con este correo."
            );
        }

        const passwordData = await this.passwordHasher.hash(user.password);
        debugger;
        
        const userData = new User({
            name: user.name,
            tipoUsuario: user.tipoUsuario,
            institucion: user.institucion,
            genero: user.genero,
            email: user.email,
            check: user.check,
            passwordHash: passwordData
        });

        return await this.userRepository.save(userData);
    }

}
    /*



import { User } from "../entities/User.js";

export class RegisterUser {

    constructor(userRepository, passwordHasher) {
        this.userRepository = userRepository;
        this.passwordHasher = passwordHasher;
    }

    async execute(userData) {

        const existingUser =
            await this.userRepository.findByEmail(
                userData.email
            );

        if (existingUser) {
            throw new Error(
                "Ya existe un usuario con este correo."
            );
        }

        const passwordData =
            await this.passwordHasher.hash(
                userData.password
            );

        const user = new User({
            name: userData.name,
            email: userData.email,
            passwordHash: passwordData
        });

        return await this.userRepository.save(user);
    }
}
    */