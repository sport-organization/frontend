import SectionItem from './sectionItem/SectionItem';
import './sections.css';

function Sections(){
    const carts = [
        {
            id: 1,
            name: 'название 1',
            description: 'lmdkcmcmmmmmm mmmmmmmmmmmmm mmmmmd wswxwckdckdcmdkmcdkmckd',
            img: 'https://shop.rovera.com/wp-content/uploads/2019/10/shutterstock_435565456.jpg',
            time: '10min',
        },
        {
            id: 2,
            name: 'название 2',
            description: 'lmdkc mcmmmmmmmmmm mmmmmmmmmmxwx wxmmmmdckdck dcmdkmcd kmckd',
            img: 'https://i.pinimg.com/originals/a9/27/81/a9278100fc46c895622adef389da1871.jpg',
            time: '10min',
        },
        {
            id: 3,
            name: 'название 3',
            description: 'lmdkcmcmmmmm mmmmmmm mmmmmmmmmmm mdckdckdcmdkm cdkmckd',
            img: 'https://i.pinimg.com/originals/bb/0e/cd/bb0ecd9d5d21cfdfd694e224f0d89f08.jpg',
            time: '10min'
        },
    ];

    return (
        <article className='main_sections'>
            <div className='training_and_article'>

                <section className='section_treining'>
                    <div className='name_section'>тренировки <a className='btn_section_new_page'>{'>'}</a></div>
                    <div className='treining'>
                        {carts.map((cart) => (
                            <div key={cart.id} className='treining_cart'>
                                <span className='treining_cart_emoji'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM8.5 6.38C9.53 6.38 10.38 7.22 10.38 8.26C10.38 9.3 9.54 10.14 8.5 10.14C7.46 10.14 6.62 9.28 6.62 8.25C6.62 7.22 7.47 6.38 8.5 6.38ZM12 19.08C9.31 19.08 7.12 16.89 7.12 14.2C7.12 13.5 7.69 12.92 8.39 12.92H15.59C16.29 12.92 16.86 13.49 16.86 14.2C16.88 16.89 14.69 19.08 12 19.08ZM15.5 10.12C14.47 10.12 13.62 9.28 13.62 8.24C13.62 7.2 14.46 6.36 15.5 6.36C16.54 6.36 17.38 7.2 17.38 8.24C17.38 9.28 16.53 10.12 15.5 10.12Z" fill="#4CFF52"/>
                                    </svg>
                                </span>
                                <SectionItem cart={cart}/>
                            </div>
                        ))}
                    </div>
                </section>

                <section className='section_article'>
                    <div className='name_section'>статьи <a className='btn_section_new_page'>{'>'}</a></div>
                    <div className='article'>
                        {carts.map((cart) => (
                            <SectionItem key={cart.id} cart={cart}/>
                        ))}
                    </div>
                </section>

            </div>
        </article>
    )
};

export default Sections;