const app = Vue.createApp({
    data() {
        return {
            nombre: '',
            correo: '',
            contrasena: '',
            repetirContrasena: '',
            nombreError: '',
            correoError: '',
            contrasenaError: '',
            repetirContrasenaError: '',
            searchQuery: '' // Valor de búsqueda
        };
    },
    methods: {
        registrar() {
            // Resetear errores
            this.nombreError = '';
            this.correoError = '';
            this.contrasenaError = '';
            this.repetirContrasenaError = '';

            let valid = true;

            // Validar nombre (solo texto)
            if (this.nombre === '') {
                this.nombreError = 'Por favor, complete el campo nombre.';
                valid = false;
            } else if (!/^[a-zA-Z\s]+$/.test(this.nombre)) {
                this.nombreError = 'El nombre solo debe contener letras.';
                valid = false;
            }

            // Validar correo
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (this.correo === '') {
                this.correoError = 'Por favor, complete el campo correo.';
                valid = false;
            } else if (!emailPattern.test(this.correo)) {
                this.correoError = 'Por favor, ingrese un correo válido.';
                valid = false;
            }

            // Validar contraseñas
            if (this.contrasena === '') {
                this.contrasenaError = 'Por favor, complete el campo de contraseña.';
                valid = false;
            }

            if (this.repetirContrasena === '') {
                this.repetirContrasenaError = 'Por favor, complete el campo de repetir contraseña.';
                valid = false;
            } else if (this.contrasena !== this.repetirContrasena) {
                this.repetirContrasenaError = 'Las contraseñas no coinciden.';
                valid = false;
            }

            if (valid) {
                alert('El registro se ha realizado correctamente.');
                this.resetForm(); // Resetear el formulario después de un registro exitoso
            }
        },
        resetForm() {
            this.nombre = '';
            this.correo = '';
            this.contrasena = '';
            this.repetirContrasena = '';
        },
        irAPagina(pagina) {
            window.location.href = pagina; // Redirigir a la página seleccionada
        },
        buscar() {
            alert(`Buscando: ${this.searchQuery}`);
        }
    }
});

app.mount('#app');
