import React from 'react';
import Categories from '../components/Categories';
import Header from '../components/Header';
import UserPostsForm from '../components/UserPostsForm';
import './userposts.css';


function UserPosts() {
    const [visibleUserCategories, setvisibleUserCategories] = React.useState(false);
    const userCategoriesRef = React.useRef(); //сохраняет ссылку на DOM елемент и хранит актуальное значение

    const toggleVisibleUserCategories = () => {
        setvisibleUserCategories(!visibleUserCategories);
    }

    const handleOutsideClickUser = (e) => {
        if(!e.path.includes(userCategoriesRef.current)){
            setvisibleUserCategories(false);
        }
    }

    React.useEffect(() => { //следит за эффектом компонента
        document.body.addEventListener('click', handleOutsideClickUser);
    }, []);
    return (
    <div>
        <Header/>
        <section>
        <div className="container">
            <h1>Публикация новости</h1>
            <div ref={userCategoriesRef} className="category_choice">
                <span>Выберете категорию вашей новости:</span>
                <a onClick={toggleVisibleUserCategories} href="#" className="user_posts_category">Категории</a>
            {visibleUserCategories &&      
            <div className="sections">
            <Categories onClick={(name) =>console.log(name)}
                        items={[
                            'Спорт',
                            'Технологии',
                            'Здоровье',
                            'Экономика',
                            'Музыка',
                            'Животные',
                            'Шоу-бизнес',
                            'Кино',
                            'Еда'
                        ]}
            />
            </div>
                    }
                    </div>
                    <UserPostsForm/>
            </div>
            </section>
        </div>
    )
}

export default UserPosts
