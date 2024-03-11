import { useState } from "react";


function Egresos() {
    const [dataEgresos, setDataEgresos] = useState([]);
    const [open, setOpen] = useState(false);

    const handleModal = () => {
        setOpen(true);
        console.log(open);
    }
    const handleClose = () => {
        setOpen(false)
    }
    return (<>
        <div class="card border-danger mb-3" style={{
            maxWidth: "40rem",

        }}>
            <div class="card-header text-danger">Egresos</div>
            <div class="card-body">
                <h4 class="card-title">Registro de Egresos</h4>
                <button
                    onClick={handleModal}
                    type="button"
                    class="btn btn-danger"
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
                    <p>Agregar egresos</p>
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
                <div class="card text-white bg-danger mb-3 w-50" >
                    <div class="card-header w-100"> <h4 class="card-title">Agreagat Egreso</h4></div>
                    <div class="card-body">

                        <form >
                            <div className="form-group">
                                <label class="form-label mb-2">descripcion del Egreso</label>
                                <input type="text" class="form-control w-50 mb-4" placeholder="Ingrese la Descripcion" />
                            </div>
                            <div className="form-group">
                                <label class="form-label mb-2">cantidad del Egreso</label>
                                <input type="number" class="form-control w-50 mb-4" placeholder="Ingrese la Cantidad" />
                            </div>
                            <div className="form-group">
                                <label class="form-label mb-2">fecha del egreso</label>
                                <input type="date" class="form-control w-50 mb-4" placeholder="Ingrese la fecha" />
                            </div>

                            <div className="modal-footer">
                                <button type="submit" onClick={handleClose} class="btn btn-success mx-2" >agreagar</button>
                                <button type="button" onClick={handleClose} class="btn btn-outline-light mx-2" >cerrar</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        )}
    </>);
}

export default Egresos;