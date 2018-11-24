import React from 'react';
import money_bag from '../../../assets/img/money-bag.png';
import './LatestTransactions.css';

const latestTransaction = ( props ) => {
    return (
        <div className="container-fluid p-0">
            <section className="latest-transactions">
                <div className="container mx-auto py-5">
                    <div className="row align-items-center text-center">
                        <div className="col py-5">
                            <h2 className="text-uppercase">Latest transactions</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <table className="table table-striped table-dark">
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col"></th>
                                    <th scope="col">Amount</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td><img src={money_bag} width="30px"/></td>
                                    <td>$100.78</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td><img src={money_bag} width="30px"/></td>
                                    <td>$435.43</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td><img src={money_bag} width="30px"/></td>
                                    <td>$543.54</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>Larry</td>
                                    <td><img src={money_bag} width="30px"/></td>
                                    <td>$543.54</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td><img src={money_bag} width="30px"/></td>
                                    <td>$543.54</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td><img src={money_bag} width="30px"/></td>
                                    <td>$543.54</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>Larry</td>
                                    <td><img src={money_bag} width="30px"/></td>
                                    <td>$543.54</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td><img src={money_bag} width="30px"/></td>
                                    <td>$543.54</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col">
                            <table className="table table-striped table-dark">
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col"></th>
                                    <th scope="col">Amount</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td><img src={money_bag} width="30px"/></td>
                                    <td>$100.78</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td><img src={money_bag} width="30px"/></td>
                                    <td>$435.43</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td><img src={money_bag} width="30px"/></td>
                                    <td>$543.54</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>Larry</td>
                                    <td><img src={money_bag} width="30px"/></td>
                                    <td>$543.54</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td><img src={money_bag} width="30px"/></td>
                                    <td>$543.54</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td><img src={money_bag} width="30px"/></td>
                                    <td>$543.54</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>Larry</td>
                                    <td><img src={money_bag} width="30px"/></td>
                                    <td>$543.54</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td><img src={money_bag} width="30px"/></td>
                                    <td>$543.54</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default latestTransaction;