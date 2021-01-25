export interface PersonalData {
  documentNumber:string;
  documentType:string;
  birthDate:Date;
  phone?:string
}

export interface CompletePersonalData {
  direccion: string;
  nomCompleto: string;
  indCrearTercero: string;
  estadoCivil: string;
  tipoPersona: string;
  Telefono: string;
  apellidoPaterno: string;
  sexo: string;
  indRequiereDireccion: string;
  paisNacimiento: string;
  nombres: string;
  stsTercero: string;
  tipoDocumento: string;
  apellidoMaterno: string;
  numDocumento: string;
  fecNacimiento: string;
  correo: string;
}

export interface ResponsePersonalData {
  tipo: "success" | "fail";
  mensaje: string;
  titulo: string;
  data:  {
    tercero: CompletePersonalData
  }
}