import React, {useState, useEffect}from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { produce } from 'immer';
import dayjs from 'dayjs';

const Order = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [baseFlavor, setBaseFlavor] = useState('Choose...');
    const [toppings, setToppings] = useState('');
    const [specialRequests, setspecialRequests] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [deliveryDate, setDeliveryDate] = useState('');
    const [total, setTotal] = useState(0);
    const [toppingCount, setToppingCount] = useState(0);
    const [disableSubmit, setDisableSubmit] = useState(true);
    const navigate = useNavigate();

    const onNameTextChange = e => {
        setName(e.target.value);
    }
    const onEmailTextChange = e => {
        setEmail(e.target.value);
    }
    const onSRTextChange = e => {
        setspecialRequests(e.target.value);
    }
    const onQTextChange = e => {
        setQuantity(e.target.value);
    }
    const onDDTextChange = e => {
        setDeliveryDate(e.target.value);
    }
    const onBFTextChange = e => {
        setBaseFlavor(e.target.value);
    }
    const onCheck = (topping) => {
        const toppingsArray = toppings.split(',').filter(t => t != '');
        if(toppingsArray.includes(topping)){
            setToppings(toppingsArray.filter(t => t !== topping).join(','));
            setToppingCount(toppingCount - 1);
        }
        else{
            toppingsArray.push(topping);
            setToppings(toppingsArray.join(','));
            setToppingCount(toppingCount + 1);
        };
        
    };
    const onSubmitClick = async () => {
        await axios.post('/api/orders/addorder', {name, email, baseFlavor, toppings, specialRequests, quantity, deliveryDate, total});
        navigate('/Success');
    }
    useEffect(() => {  
        const setSubmitButton = () => {
        if(name && email && deliveryDate && (baseFlavor !== 'Choose...')){
            setDisableSubmit(false);
        }
        else{
            setDisableSubmit(true);
        };
    };
    if(baseFlavor === 'Choose...'){
        setTotal(0);
    }
    else{
        setTotal((49.99 + (toppingCount * 3.95)) * quantity);
    }
    setSubmitButton();
    
});
    return (
        <div >
            <h1 className="text-center my-4">Cheesecake Factory Order Form</h1>
            <div className="row">
                <div className="col-md-6">
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" onChange={onNameTextChange} className="form-control" value={name} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" onChange={onEmailTextChange} className="form-control" value={email} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Cheesecake Base Flavor ($49.99)</label>
                        <select className="form-select" onChange={onBFTextChange}>
                            <option>Choose...</option>
                            <option>Classic</option>
                            <option>Chocolate</option>
                            <option>Red Velvet</option>
                            <option>Brownie</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Toppings (each topping adds an additional $3.95)</label>
                        <div className="form-check">
                            <input className="form-check-input" onChange={() =>onCheck('Chocolate Chips')} type="checkbox" />
                            <label className="form-check-label">Chocolate Chips</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" onChange={() =>onCheck('Caramel Drizzle')} type="checkbox" />
                            <label className="form-check-label">Caramel Drizzle</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" onChange={() =>onCheck('Whipped Cream')} type="checkbox" />
                            <label className="form-check-label">Whipped Cream</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" onChange={() =>onCheck('Almonds')} type="checkbox" />
                            <label className="form-check-label">Almonds</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" onChange={() =>onCheck('Toasted Coconut')} type="checkbox" />
                            <label className="form-check-label">Toasted Coconut</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" onChange={() =>onCheck('Graham Cracker Crumble')} type="checkbox" />
                            <label className="form-check-label">Graham Cracker Crumble</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" onChange={() =>onCheck('Cookie Dough')} type="checkbox" />
                            <label className="form-check-label">Cookie Dough</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" onChange={() =>onCheck('Mint Chocolate Chips')} type="checkbox" />
                            <label className="form-check-label">Mint Chocolate Chips</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" onChange={() =>onCheck('Caramelized Bananas')} type="checkbox" />
                            <label className="form-check-label">Caramelized Bananas</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" onChange={() =>onCheck('Rainbow Sprinkles')} type="checkbox" />
                            <label className="form-check-label">Rainbow Sprinkles</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" onChange={() =>onCheck('Powdered Sugar')} type="checkbox" />
                            <label className="form-check-label">Powdered Sugar</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" onChange={() =>onCheck('White Chocolate Shavings')} type="checkbox" />
                            <label className="form-check-label">White Chocolate Shavings</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" onChange={() =>onCheck('Peanut Butter Drizzle')} type="checkbox" />
                            <label className="form-check-label">Peanut Butter Drizzle</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" onChange={() =>onCheck('Dark Chocolate Drizzle')} type="checkbox" />
                            <label className="form-check-label">Dark Chocolate Drizzle</label>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Special Requests</label>
                        <textarea className="form-control" onChange={onSRTextChange} rows="3">{specialRequests}
                        </textarea>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Quantity</label>
                        <input type="number" className="form-control" onChange={onQTextChange} min="1" value={quantity} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Delivery Date</label>
                        <input type="date" className="form-control" onChange={onDDTextChange} value={deliveryDate} />
                    </div>
                    <button type="submit" disabled={disableSubmit} onClick={onSubmitClick} className="btn btn-primary">Submit Order</button>
                </div>
                <div className="col-md-6 position-sticky">
                    <h2 className="mb-4">Live Preview</h2>
                    <div className="card">
                        <img src="/cheesecake.jpg" className="card-img-top" alt="Cheesecake" />
                        <div className="card-body">
                            <h5 className="card-title"> {name}'s Custom Cheesecake</h5>
                            <p className="card-text">Base: {baseFlavor}</p>
                            <p className="card-text">Toppings: {toppings}</p>
                            <p className="card-text">Special Requests: {specialRequests}</p>
                            <p className="card-text">Quantity: {quantity}</p>
                            <p className="card-text">Delivery Date: {dayjs(deliveryDate).format("MM/DD/YYYY")}</p>
                            <p className="card-text fw-bold">Total: {total}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
}
export default Order