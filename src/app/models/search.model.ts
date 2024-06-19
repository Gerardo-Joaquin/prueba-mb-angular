export interface SearchResult {
  count: number;
  next: string;
  previous: null;
  results: SearchProduct[];
}

export interface SearchProduct {
  id: number;
  titulo?: string;
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