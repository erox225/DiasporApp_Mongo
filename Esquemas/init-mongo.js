use restaurante;  // Seleccionar la base de datos

db.createCollection("comandas", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["id_mesa", "estado_mesa", "estado", "fecha", "platos"],
            properties: {
                id_mesa: { bsonType: "int", description: "ID de la mesa (obligatorio, numérico)" },
                estado_mesa: {
                    bsonType: "object",
                    required: ["id", "nombre"],
                    properties: {
                        id: { bsonType: "int", description: "ID del estado de la mesa" },
                        nombre: { bsonType: "string", description: "Nombre del estado de la mesa" }
                    }
                },
                estado: { 
                    bsonType: "string", 
                    enum: ["Finalizada", "No Finalizado"],
                    description: "Estado de la comanda (Finalizada o No Finalizado)" 
                },
                fecha: { bsonType: "date", description: "Fecha de creación de la comanda" },
                platos: {
                    bsonType: "array",
                    minItems: 1,
                    items: {
                        bsonType: "object",
                        required: ["id_plato", "nombre", "precio", "comensal", "estado"],
                        properties: {
                            id_plato: { bsonType: "int", description: "ID del plato" },
                            nombre: { bsonType: "string", description: "Nombre del plato" },
                            precio: { bsonType: "double", description: "Precio del plato" },
                            comensal: { bsonType: "int", description: "Número del comensal" },
                            estado: { 
                                bsonType: "string", 
                                enum: ["Entregado", "No Entregado"],
                                description: "Estado del plato en la comanda" 
                            }
                        }
                    }
                }
            }
        }
    }
});
