import { useState } from "react";
import Results from "./results";
function Ingresos() {
    const [open, setOpen] = useState(false);
    const [ingresoTotal,setIngresoTotal]=useState(0);
    const [dataIngresos,setDataIngresos]=useState([]);
    const [selectedButton,setSelectedButton]=useState('cake');
    const [formIngreso,setFormIngreso]=useState({
        descripcion:'',
        cantidad:0,
        fecha:'',
        state:true,
        icon:''
    });

    const handleModal = () => {
        setOpen(true);
        console.log(open);
    }
    const handleClose=()=>{
        setOpen(false)
    }

    const handleButtonClick = (value) => {
        setSelectedButton(value);

    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormIngreso(prevE => ({
            ...prevE,
            [name]: value
        }));
    }
    const styleCards="p-3 list-group-item-success text-dark  list-group-item-action flex-column align-items-start active";
    const handlesubmit = async (e) => {
        e.preventDefault();
        const updateform = { ...formIngreso, icon: selectedButton }
        setDataIngresos([...dataIngresos, updateform]);
        // console.log(dataIngresos);
        handleClose();
        setFormIngreso({
            descripcion: '',
            cantidad: 0,
            fecha: '',
            state: true,
            icon: ''

        });
        setIngresoTotal(ingresoTotal+parseFloat(formIngreso.cantidad));
        handleClose();
    }



    return (<>
        <div class="card border-success mb-3 " style={{width:'700px'}}>
            <div class="card-header text-success">Ingresos</div>
            <div class="card-body">
                <h3 class="card-title">Registro de Ingresos</h3>
                <p>{`Total de ingresos:$ ${ingresoTotal}`}</p>
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

                <Results dataE={dataIngresos} styleCard={styleCards}/>
            </div>
        </div>
        {open && (
            <div className="modal-overlay"
                style={{
                    position: 'fixed'
                }}
            >
                <div class="card text-success bg-light mb-3 w-50" >
                    <div class="card-header w-100"> <h4 class="card-title">Agreagat Ingreso</h4></div>
                    <div class="card-body">

                        <form onSubmit={handlesubmit} >
                            <div className="form-group">
                                <label class="form-label mb-2">descripcion del Ingreso</label>
                                <input 
                                type="text" 
                                class="form-control w-50 mb-4" 
                                placeholder="Ingrese la Descripcion" 
                                name="descripcion"
                                value={formIngreso.descripcion}
                                onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label class="form-label mb-2">cantidad del Ingreso</label>
                                <input 
                                type="number" 
                                class="form-control w-50 mb-4" 
                                placeholder="Ingrese la Cantidad" 
                                name="cantidad"
                                value={formIngreso.cantidad}
                                onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label class="form-label mb-2">fecha del Ingreso</label>
                                <input 
                                type="date" 
                                class="form-control w-50 mb-4" 
                                placeholder="Ingrese la fecha" 
                                name="fecha"
                                value={formIngreso.fecha}
                                onChange={handleChange}
                                />
                            </div>
                            <div >
                                <button
                                    type="button"
                                    className={`btn btn-primary ${selectedButton === 'cake' ? 'selected' : ''}`}
                                    onClick={() => handleButtonClick('cake')}
                                >
                                    <span className="material-symbols-outlined">cake</span>
                                </button>
                                <button
                                    type="button"
                                    className={`btn btn-primary ${selectedButton === 'import_contacts' ? 'selected' : ''}`}
                                    onClick={() => handleButtonClick('import_contacts')}
                                >
                                    <span class="material-symbols-outlined">
                                        import_contacts
                                    </span>
                                </button>
                                <button
                                    type="button"
                                    className={`btn btn-primary ${selectedButton === 'shopping_cart' ? 'selected' : ''}`}
                                    onClick={() => handleButtonClick('shopping_cart')}
                                >
                                    <span class="material-symbols-outlined">
                                        shopping_cart
                                    </span>
                                </button>
                                <button
                                    type="button"
                                    className={`btn btn-primary ${selectedButton === 'construction' ? 'selected' : ''}`}
                                    onClick={() => handleButtonClick('construction')}
                                >
                                    <span class="material-symbols-outlined">
                                        construction
                                    </span>
                                </button>
                                <button
                                    type="button"
                                    className={`btn btn-primary ${selectedButton === 'movie' ? 'selected' : ''}`}
                                    onClick={() => handleButtonClick('movie')}
                                >
                                    <span class="material-symbols-outlined">
                                        movie
                                    </span>
                                </button>
                                <button
                                    type="button"
                                    className={`btn btn-primary ${selectedButton === 'receipt_long' ? 'selected' : ''}`}
                                    onClick={() => handleButtonClick('receipt_long')}
                                >
                                    <span class="material-symbols-outlined">
                                        receipt_long
                                    </span>
                                </button>


                            </div>

                            <div className="modal-footer">
                                <button type="submit" class="btn btn-outline-success mx-2" >agreagar</button>
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