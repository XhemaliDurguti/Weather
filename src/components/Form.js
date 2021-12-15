import React from 'react'

export default function Form(props) {
    return (
            <div className='container'>
                <form className='py-5' onSubmit={props.getData}>
                    <div className="row">
                        <div className="col-md-5">
                            <input type="text" placeholder="Qyteti.." className="form-control" name="qyteti" />
                        </div>
                        <div className="col-md-5">
                            <input type="text" placeholder="Shteti.." className="form-control" name="shteti" />
                        </div>
                        <div className="col-md-2">
                            <button className='btn btn-warning'>Shiko Motin</button>
                        </div>
                    </div>
                </form>
            </div>
        )
}
