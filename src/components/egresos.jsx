import { useState, useEffect } from "react";


function Egresos() {
    const [dataEgresos, setDataEgresos] = useState([]);
    const [formEgresos, setFormEgresos] = useState({
        descripcion: '',
        cantidad: 0,
        fecha: '',
        state: true,
        type: 'egreso'
    })
    const [open, setOpen] = useState(false);

    const handleModal = () => {
        setOpen(true);
        console.log(open);
    }
    const handleClose = () => {
        setOpen(false)
    }
    const handlesubmit = (e) => {
        e.preventDefault();
        setDataEgresos([...dataEgresos, formEgresos]);
        console.log(dataEgresos);
        handleClose();
        setFormEgresos({
            descripcion: '',
            cantidad: 0,
            fecha: '',
            state: true,
            type: 'egreso'
        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormEgresos(prevE => ({
            ...prevE,
            [name]: value
        }));
    }
    useEffect(() => {
        console.log(dataEgresos);
    }, [dataEgresos]);
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
                <div class="card mb-3 w-50" >
                    <div class="card-header w-100"> <h4 class="card-title">Agreagar Egreso</h4></div>
                    <div class="card-body">

                        <form onSubmit={handlesubmit}>
                            <div className="form-group">
                                <label class="form-label mb-2">descripcion del Egreso</label>
                                <input
                                    type="text"
                                    class="form-control w-50 mb-4"
                                    placeholder="Ingrese la Descripcion"
                                    name="descripcion"
                                    value={formEgresos.descripcion}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label class="form-label mb-2">cantidad del Egreso</label>
                                <input
                                    type="number"
                                    class="form-control w-50 mb-4"
                                    placeholder="Ingrese la Cantidad"
                                    name="cantidad"
                                    value={formEgresos.cantidad}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label class="form-label mb-2">fecha del egreso</label>
                                <input
                                    type="date"
                                    class="form-control w-50 mb-4"
                                    placeholder="Ingrese la fecha"
                                    name="fecha"
                                    value={formEgresos.fecha}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="modal-footer">
                                <button type="submit" class="btn btn-success mx-2" >agreagar</button>
                                <button type="button" onClick={handleClose} class="btn btn-outline-danger mx-2" >cerrar</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        )}
    </>);
}

export default Egresos;