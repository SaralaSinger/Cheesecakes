import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Layout';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Order from './Order';
import ViewOrders from './ViewOrders';
import OrderDetails from './OrderDetails';
import Success from './Success';

const App = () => {
    
        return (
            <Layout>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/Order' element={<Order />} />
                    <Route exact path='/Success' element={<Success />} />
                    <Route exact path='/ViewOrders' element={<ViewOrders />} />
                    <Route exact path='/OrderDetails/:id' element={<OrderDetails />} />
                </Routes>
            </Layout>
        );
    
        };

export default App;