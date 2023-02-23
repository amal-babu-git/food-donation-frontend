import React from 'react'

const BookModal = ({details = '',agent}) => {

    const whatsappDetails = () => {




    }



    return (
        <div>{/* The button to open modal */}
            <label htmlFor="my-modal" className="btn">Whatsapp to Donar</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Send details to donar </h3>
                    <p className="py-4"></p>
                    <div className="modal-action">
                        <label htmlFor="my-modal" className="btn" onClick={whatsappDetails}>Send!</label>
                    </div>
                </div>
            </div></div>
    )
}

export default BookModal