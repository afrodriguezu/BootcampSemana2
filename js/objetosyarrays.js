
    function objetosyarrays() { 

        let alumnosMatriculados = [
            {"Rut" : 1-9, 
            "Nombre" : "Pedro",
            "Apellido" : "Perez",
            "cod_curso" : "AE600", 
            "descripcion" : "Algoritmos y Estructura de datos"},

            {"Rut" : 2-7, 
            "Nombre" : "Juan",
            "Apellido" : "Jara",
            "cod_curso" : "BD253", 
            "descripcion" : "Base de Datos"},

            {"Rut" : 2-7, 
            "Nombre" : "Juan",
            "Apellido" : "Jara",
            "cod_curso" : "AE600", 
            "descripcion" : "Algoritmos y Estructura de datos"},

            {"Rut" : 3-5, 
            "Nombre" : "Diego",
            "Apellido" : "Díaz",
            "cod_curso" : "BD253", 
            "descripcion" : "Base de Datos"},

            {"Rut" : 4-4, 
            "Nombre" : "Maria",
            "Apellido" : "Martinez",
            "cod_curso" : "BD253", 
            "descripcion" : "Base de Datos"},
            
        ]

        let alumno = [
            {"Rut" : 1-9,
            "Nombre" : "Pedro",
            "Apellido" : "Perez"},

            {"Rut" : 2-7, 
            "Nombre" : "Juan",
            "Apellido" : "Jara"},

            {"Rut" : 3-5, 
            "Nombre" : "Diego",
            "Apellido" : "Díaz"},

            {"Rut" : 4-4, 
            "Nombre" : "Maria",
            "Apellido" : "Martinez"}
        ]

        let cursos = [
            {"cod_curso" : "AE600",
            "descripcion" : "Algoritmos y Estructura de datos"},

            {"cod_curso" : "BD253",
            "descripcion" : "Bases de Datos"}
        ]

        let matricula = [
            {"Rut" : 1-9,
            "cod_curso" : "AE600"},

            {"Rut" : 2-7,
            "cod_curso" : "BD253"},

            {"Rut" : 2-7,
            "cod_curso" : "AE600"},

            {"Rut" : 3-5,
            "cod_curso" : "BD253"},

            {"Rut" : 4-4,
            "cod_curso" : "BD253"}

        ]

        console.log(alumnosMatriculados)   
        console.log(alumnosMatriculados[0].descripcion) 
        console.log(alumnosMatriculados[1].descripcion) 
}