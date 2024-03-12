import { useState } from "react";

function Ingresos() {
    const [open, setOpen] = useState(false);
    
    const handleModal = () => {
        setOpen(true);
        console.log(open);
    }
    const handleClose=()=>{
        setOpen(false)
    }
    return (<>
        <div class="card border-success mb-3 " style={{width:'700px'}}>
            <div class="card-header text-success">Ingresos</div>
            <div class="card-body">
                <h3 class="card-title">Registro de Ingresos</h3>
                <button
                    onClick={handleModal}
                    type="button"
                    class="btn btn-success"
                    style={{
                        margin: '0px 12px',
                        display: 'flex',
                        width: '180px',
                        height: '40px',
                        justifyContent: 'center',
                        gap: '5px'
                    }}

                >
                    <span class="material-symbols-outlined">
                        add_box
                    </span>
                    <p>Agregar ingresos</p>
                </button>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
        {open && (
            <div className="modal-overlay"
                style={{
                    position: 'fixed'
                }}
            >
                <div class="card text-white bg-success mb-3 w-50" >
                    <div class="card-header w-100"> <h4 class="card-title">Agreagat Ingreso</h4></div>
                    <div class="card-body">

                        <form >
                            <div className="form-group">
                                <label class="form-label mb-2">descripcion del Ingreso</label>
                                <input type="text" class="form-control w-50 mb-4" placeholder="Ingrese la Descripcion" />
                            </div>
                            <div className="form-group">
                                <label class="form-label mb-2">cantidad del Ingreso</label>
                                <input type="number" class="form-control w-50 mb-4" placeholder="Ingrese la Cantidad" />
                            </div>
                            <div className="form-group">
                                <label class="form-label mb-2">fecha del Ingreso</label>
                                <input type="date" class="form-control w-50 mb-4" placeholder="Ingrese la fecha" />
                            </div>

                            <div className="modal-footer">
                                <button type="submit" onClick={handleClose} class="btn btn-outline-light mx-2" >agreagar</button>
                                <button type="button" onClick={handleClose} class="btn btn-danger mx-2" >cerrar</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        )}
    </>);
}

export default Ingresos;