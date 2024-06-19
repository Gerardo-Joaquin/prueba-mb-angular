export interface VehiclesRes {
    success: number;
    content: Vehicle[];
    mensaje: string;
} 
export interface CategoryRes {
    success: number;
    content: Category[];
    mensaje: string;
} 

export interface Vehicle {
    id: number;
    descripcion_corta: string;
    nombre: string;
    fecha_registro: string;
    activo: number;
}

export interface Category {
    id: number;
    subcategoria_nombre: string;
    nombre: string;
    imagen: string;
    activo: number;
    subcategoria: number;
}