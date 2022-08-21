import React, {useState} from "react";
import MinMax from "./MinMax";

export default function (){
    let [ products, setProducts ] = useState(productsStub());

    let setCnt = (id, cnt) => {
    setProducts(products.map(pr => pr.id != id ? pr : ({ ...pr, cnt })));
    }

    return <div className="some">
        <h1>Products list</h1>
        <table>
            <tbody>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Cnt</th>
                    <th>Total</th>
                    </tr>
                { products.map((pr, i) => (
                    <tr key={ pr.id }>
                        <td>{ i + 1 }</td>
                        <td>{ pr.title }</td>
                        <td>{ pr.price }</td>
                        <td>
                            <MinMax max={ pr.rest } current={ pr.cnt } onChange={ cnt => setCnt(pr.id, cnt) }/>
                        </td>
                        <td>{ pr.price * pr.cnt}</td>
                    </tr>
                )) }
            </tbody>
        </table>
        { products.length }
    </div>;
}

function productsStub(){
    return [
        {
            id: 100,
            title: 'Iphome 200',
            price: 12000,
            rest: 10,
            cnt: 1
        },
        {
            id: 101,
            title: 'Iphome 300',
            price: 13000,
            rest: 7,
            cnt: 1
        },
        {
            id: 102,
            title: 'Iphome 400',
            price: 14000,
            rest: 4,
            cnt: 1
        },
        {
            id: 103,
            title: 'Iphome 500',
            price: 15000,
            rest: 3,
            cnt: 1
        }
    ]
}
