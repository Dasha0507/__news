import React from 'react';
import './subscriptions.css';

function Subscriptions() {

    // const [subscription, setSubscription] = React.useState(0);

    return (
        <div className="packets">
        <div className="d-flex border packet">
            <div className="info">
            <a href ="#">Free пакет</a>
            <p>Ограничен доступ к таким категориям как “Кулинария” + “Кино” + “Шоу-бизнес”.
            </p>
        </div>
        <div className="price">
            <span>0 byn/месяц</span>
        </div>
        </div>
      
        <div className="d-flex border packet">
            <div className="info">
            <a href ="#">Basic пакет</a>
            <p>Предоставляет доступ к категории “Кулинария.”
            </p>
        </div>
        <div className="price">
            <span>2 byn/месяц</span>
        </div>
        </div>
      
        <div className="d-flex border packet">
            <div className="info">
            <a href ="#">Premium пакет</a>
            <p>Предоставляет доступ к категории “Кулинария” + “Кино”.
            </p>
        </div>
        <div className="price">
            <span>3 byn/месяц</span>
        </div>
        </div>
      
        <div className="d-flex border packet">
            <div className="info">
            <a href ="#">VIP пакет</a>
            <p>Предоставляет доступ к категории “Кулинария” + “Кино” + “Шоу-бизнес”.
            </p>
        </div>
        <div className="price">
            <span>5 byn/месяц</span>
        </div>
        </div>
      </div>
      
    )
}

export default Subscriptions




// const content = props.posts.map((post) =>
//     <div key={post.id}>
//       <h3>{post.title}</h3>
//       <p>{post.content}</p>
//     </div>
//   );

// const subscriptions = [
//     {id: 1, name: 'Free пакет', content: 'Ограничен доступ к таким категориям как “Кулинария” + “Кино” + “Шоу-бизнес”', price: '0'},
//     {id: 2, name: 'Basic пакет', content: 'Открывает доступ к категории “Кулинария”.', price: '2'},
//     {id: 3, name: 'Premium пакет', content: 'Открывает доступ к категории “Кулинария” + “Кино”.' , price: '3'},
//     {id: 4, name: 'VIP пакет', content: 'Открывает доступ к категории “Кулинария” + “Кино” + “Шоу-бизнес”', price: '5'}
// ]

{/* <div className="d-flex border packet">
            <ul>
                <li>
                    
                </li>
            </ul>
            
        </div> */}