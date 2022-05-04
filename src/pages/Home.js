import PopularList from "../components/PopularList"
import SnackList from "../components/SnackList"

const Home = () => {

    return (
        <>
            {/*<SearchForm/>*/}
            <div className='container'>
                <PopularList/>
                <SnackList/>
            </div>

        </>
    )
}

export default Home