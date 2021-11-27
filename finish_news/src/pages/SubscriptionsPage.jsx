import React from 'react';
import Header from '../components/Header';
import Subscriptions from '../components/Subscriptions';
import './subscriptionspage.css'

function SubscriptionsPage() {

    // const [subscription, setSubscription] = React.useState([
    //     {id: 1, name: 'Free пакет', content: 'Ограничен доступ к таким категориям как “Кулинария” + “Кино” + “Шоу-бизнес”', price: '0'},
    //     {id: 2, name: 'Basic пакет', content: 'Открывает доступ к категории “Кулинария”.', price: '2'},
    //     {id: 3, name: 'Premium пакет', content: 'Открывает доступ к категории “Кулинария” + “Кино”.' , price: '3'},
    //     {id: 4, name: 'VIP пакет', content: 'Открывает доступ к категории “Кулинария” + “Кино” + “Шоу-бизнес”', price: '5'}
    //     ]);

    return (
        <div>
            <Header/>
            <div className="wrapper">
            <div className="container">
                <h1>Выберете желаемую подписку</h1>
            <Subscriptions />
            </div>
            </div>
            
        </div>
    )
}

export default SubscriptionsPage


