const app = Vue.createApp({
    data() {
        return {
            currentTab: 'calificaciones', // Pestaña actual
            notas: {
                nota1: null,
                nota2: null,
                nota3: null
            },
            asistencia: null,
            resultado: '', // Mensaje de resultado
            errorMessage: '', // Mensaje de error
            promedioCalculado: 0, // Promedio calculado
            estado: '', // Estado de aprobado o reprobado
            searchQuery: '' // Valor de búsqueda
        };
    },
    methods: {
        showTab(tab) {
            this.currentTab = tab;
            this.resultado = ''; // Limpiar resultado al cambiar de pestaña
            this.errorMessage = ''; // Limpiar mensaje de error
            this.promedioCalculado = 0; // Limpiar promedio
            this.estado = ''; // Limpiar estado
        },
        calcularPromedio() {
            const { nota1, nota2, nota3 } = this.notas;
            const asistencia = this.asistencia;

            // Validación de los campos
            if (
                nota1 === null || nota2 === null || nota3 === null || asistencia === null ||
                nota1 < 10 || nota1 > 70 ||
                nota2 < 10 || nota2 > 70 ||
                nota3 < 10 || nota3 > 70 ||
                asistencia < 0 || asistencia > 100
            ) {
                this.errorMessage = 'Por favor, ingrese valores válidos para las notas y la asistencia.';
                this.resultado = ''; // Limpiar resultado si hay error
                this.promedioCalculado = 0; // Limpiar promedio calculado
                this.estado = ''; // Limpiar estado
                return;
            }

            this.errorMessage = ''; // Limpiar mensaje de error si todo es válido

            // Cálculo del promedio ponderado
            this.promedioCalculado = (nota1 * 0.35) + (nota2 * 0.35) + (nota3 * 0.30);

            // Validación de aprobación
            if (this.promedioCalculado >= 40 && asistencia >= 80) {
                this.estado = 'Aprobado';
            } else {
                this.estado = 'Reprobado';
            }

            // Mostrar el mensaje detallado
            this.resultado = `El promedio es: ${this.promedioCalculado.toFixed(2)}. Tu estado es: ${this.estado}.`;
        },
        buscar() {
            // Aquí puedes manejar la lógica de búsqueda según sea necesario
            alert(`Buscando: ${this.searchQuery}`);
        }
    }
});

app.mount('#app');
