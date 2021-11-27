import React from 'react';
import './userpostsform.css';
import Categories from './Categories';

function UserPostsForm({create}) {   
   const [post, setPost] = React.useState({title: '', full_description: '', })

    const addUserPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        
        create(newPost)
        setPost({title: '', full_description: ''})
    }

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
    <form>
        <input 
        value={post.title}
        onChange={(e) => setPost({...post, title: e.target.value})}
        type="text" 
        className="inputs" 
        placeholder="Название публикации"
        />
        <div>
            <input
            value={post.full_description}
            onChange={(e) => setPost({...post, full_description: e.target.value})}
            type="text" 
            className="inputs height" 
            placeholder="Напишите свою новость"
            />
          <div ref={userCategoriesRef} className="category_choice">
                <span>Выберете категорию вашей новости:</span>
                <a onClick={toggleVisibleUserCategories} href="#" className="user_posts_category">Категории</a>
            {visibleUserCategories &&      
            <div className="sections">
            <Categories onClick={(name) =>console.log(name)}
                        items={[
                            'Политика',
                            'Спорт',
                            'Технологии',
                            'Здоровье',
                            'Экономика',
                            'Музыка',
                            'Животные',
                            'Шоу-бизнес',//эта категория будет доступна в Basic, PREMIUM, VIP
                            'Кино',//эта категория будет доступна в PREMIUM, VIP
                            'Еда'//эта категория будет доступна в VIP
                        ]}
            />
            </div>
                    }
                    </div>
        <button onClick={addUserPost} className="btn">Опубликовать</button>
        </div>
    </form>
    )
}

export default UserPostsForm
