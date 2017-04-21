L.drawLocal = {
	draw: {
		toolbar: {
			actions: {
				title: 'Cancelar dibujo',
				text: 'Cancelar'
			},
			undo: {
				title: 'Eliminar ultimo punto dibujado',
				text: 'Eliminar ultimo punto'
			},
			buttons: {
				polyline: 'Dibujar una linea',
				polygon: 'Dibujar un poligono',
				rectangle: 'Dibujar un rectangulo',
				circle: 'Dibujar un circulo',
				marker: 'Dibujar un marcador'
			}
		},
		handlers: {
			circle: {
				tooltip: {
					start: 'Haga clic y arrastre para dibujar el círculo.'
				},
				radius: 'Radio'
			},
			marker: {
				tooltip: {
					start: 'Haga clic en el mapa para colocar el marcador.'
				}
			},
			polygon: {
				tooltip: {
					start: 'Haga clic para empezar a dibujar la forma.',
					cont: 'Haga clic para continuar dibujando la forma.',
					end: 'Haga clic en primer punto para cerrar esta forma.'
				}
			},
			polyline: {
				error: '<strong>Error:</strong> Los bordes de la forma no pueden cruzar!',
				tooltip: {
					start: 'Haga clic para iniciar a dibujar la línea',
					cont: 'Haga clic para continuar dibujando la línea.',
					end: 'Haga clic en el último punto para terminar la línea.'
				}
			},
			rectangle: {
				tooltip: {
					start: 'Haga clic y arrastre para dibujar rectángulo.'
				}
			},
			simpleshape: {
				tooltip: {
					end: 'Suelte el ratón para terminar de dibujar.'
				}
			}
		}
	},
	edit: {
		toolbar: {
			actions: {
				save: {
					title: 'Guardar cambios.',
					text: 'Guardar'
				},
				cancel: {
					title: 'Cancelar la edición, descartar todos los cambios.',
					text: 'Cancelar'
				}
			},
			buttons: {
				edit: 'Editar capas.',
				editDisabled: 'No hay capas que editar.',
				remove: 'Eliminar capas.',
				removeDisabled: 'No hay capas que eliminar.'
			}
		},
		handlers: {
			edit: {
				tooltip: {
					text: 'Arrastre las manijas o marcador para editar la función.',
					subtext: 'Haga clic en Cancelar para deshacer los cambios.'
				}
			},
			remove: {
				tooltip: {
					text: 'Haga clic en una característica para eliminar'
				}
			}
		}
	}
};