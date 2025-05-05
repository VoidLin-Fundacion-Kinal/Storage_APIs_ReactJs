//Crear todas las validaciones de Campos

export const validateName = (name)=>{
    const regex = /^\S{3,25}$/
    return regex.test(name)
}

export const validateSurName = (name)=>{
    const regex = /^\S{3,25}$/
    return regex.test(name)
}


/* -------------------------- VALIDACIÓN DE CORREO ----------------------- */
export const validateEmail = (email)=>{
    const regex = /\S+@\S+\.\S+/
    return regex.test(email)
}
/* -------------------------- VALIDACIÓN DE CORREO ----------------------- */

/* ----------------- VALIDACIÓN DE NOMBRE DE USUARIO ------------------- */
export const validateUsername = (username)=>{
    const regex = /^\S{3,15}$/
    return regex.test(username)
}
/* ----------------- VALIDACIÓN DE NOMBRE DE USUARIO ------------------- */

/* ----------------- VALIDACIÓN DE CONTRASEÑA ------------------- */
export const validatePassword = (password)=>{
    const regex = /^\S{8,100}$/ //Chetar despues
    return regex.test(password)
}
/* ----------------- VALIDACIÓN DE CONTRASEÑA ------------------- */

/**VALIDACION DE TELEFONO */
export const validatePhone = (phone)=>{
    const regex = /^[0-9]{8,15}$/
    return regex.test(phone)
}

export const validateRole =(role) => {
    const regex = /^(ADMIN|EMPLOYEE)$/
    return regex.test(role.toUpperCase())
  }
  
 

/* ----------------- VALIDACIÓN DE CONFIRMACIÓN DE CONTRASEÑA ------------------- */
export const validatePassConfirm = (password, passConfirm)=>{
    return password === passConfirm
}
/* ----------------- VALIDACIÓN DE CONFIRMACIÓN DE CONTRASEÑA ------------------- */

/* ---------------------------------------------------------------------- */
/* ----------------- MENSAJES GENERALES DE VALIDACIÓN ------------------- */
/* ---------------------------------------------------------------------- */

export const nameValidationMessage ='El nombre debe contener entre 3 y 25 caracteres (Sin espacios)'
export const surNameValidationMessage = 'El apellido debe contener entre 3 y 25 caracteres (Sin espacios)'
export const emailValidationMessage = 'Por favor ingresa un correo válido'
export const usernameValidationMessage = 'El nombre de usuario debe contener entre 3 y 15caracteres (Sin espacios)'
export const passwordValidationMessage = 'La contraseña debe tener entre 8 y 100 caracteres, sin espacios'
export const passConfirmValidationMessage = 'Las contraseñas no coinciden'
export const phoneValidatonMessage = 'Debe de ser un numero válido'
export const roleValidationMessage = 'debe de ser ADMIN,EMPLOYEE'
