export const API_BASE_URL = 'https://apidatos.ree.es';
export const API_ENDPOINT = '/es/datos/mercados/precios-mercados-tiempo-real';
export const TIME_TRUNC = 'hour';
export const GEO_TRUNC = 'electric_system';


enum GeoLimit {
    PENINSULAR = 'peninsular',
    CANARIAS = 'canarias',
    BALEARES = 'baleares',
    CEUTA = 'ceuta',
    MELILLA = 'melilla',
    ANDALUCIA = 'ccaa',
    ARAGON = 'ccaa',
    CANTABRIA = 'ccaa',
    CASTILLA_LA_MANCHA = 'ccaa',
    CASTILLA_Y_LEON = 'ccaa',
    CATALUNA = 'ccaa',
    PAIS_VASCO = 'ccaa',
    PRINCIPADO_DE_ASTURIAS = 'ccaa',
    COMUNIDAD_DE_CEUTA = 'ccaa',
    COMUNIDAD_DE_MELILLA = 'ccaa',
    COMUNIDAD_DE_MADRID = 'ccaa',
    COMUNIDAD_DE_NAVARRA = 'ccaa',
    COMUNIDAD_VALENCIANA = 'ccaa',
    EXTREMADURA = 'ccaa',
    GALICIA = 'ccaa',
    ISLAS_BALEARES = 'ccaa',
    ISLAS_CANARIAS = 'ccaa',
    LA_RIOJA = 'ccaa',
    REGION_DE_MURCIA = 'ccaa',
  }
  
  enum GeoId {
    PENINSULAR = '8741',
    CANARIAS = '8742',
    BALEARES = '8743',
    CEUTA = '8744',
    MELILLA = '8745',
    ANDALUCIA = '4',
    ARAGON = '5',
    CANTABRIA = '6',
    CASTILLA_LA_MANCHA = '7',
    CASTILLA_Y_LEON = '8',
    CATALUNA = '9',
    PAIS_VASCO = '10',
    PRINCIPADO_DE_ASTURIAS = '11',
    COMUNIDAD_DE_CEUTA = '8744',
    COMUNIDAD_DE_MELILLA = '8745',
    COMUNIDAD_DE_MADRID = '13',
    COMUNIDAD_DE_NAVARRA = '14',
    COMUNIDAD_VALENCIANA = '15',
    EXTREMADURA = '16',
    GALICIA = '17',
    ISLAS_BALEARES = '8743',
    ISLAS_CANARIAS = '8742',
    LA_RIOJA = '20',
    REGION_DE_MURCIA = '21',
  }
  
  export { GeoLimit, GeoId };