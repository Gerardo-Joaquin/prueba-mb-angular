export interface Offers {
  success: number;
  content: Offer[];
  mensaje: string;
}

export interface Offer {
  id: number;
  nombre: null | string;
  marca: string;
  descripcion: null | string;
  detalles: string;
  peso: null | string;
  ancho: null | string;
  alto: null | string;
  largo: null | string;
  imagen: null | string;
  elementos_recomendados: number;
  fecha_registro: string;
  sku: string;
  activo: number;
  convertida: number;
  unique_id: string;
  marca_autoparte: null;
  subsubcategoria: null;
}


export interface Products {
  success: number;
  content: Product[];
  mensaje: string;
}

export interface Product {
  id: number;
  precio: number;
  nombre: string;
  marca: string;
  descripcion: null;
  detalles: null;
  peso: null;
  ancho: null;
  alto: null;
  largo: null;
  imagen: string;
  elementos_recomendados: number;
  fecha_registro: string;
  sku: string;
  activo: number;
  convertida: number;
  unique_id: string;
  marca_autoparte: number;
  subsubcategoria: number;
}