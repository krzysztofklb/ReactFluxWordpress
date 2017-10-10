import DataStore from 'flux/stores/DataStore.js'

class Home extends React.Component {
    render() {
        let allPosts = DataStore.getAllPosts();
        console.log(allPosts);
        return (
            <div>
                <h1>Home</h1>
                <h2>All posts:</h2>
                {allPosts.map(post => {
                    return (
                        <SinglePost key={post.id} idx={post.id} title={post.title.rendered}
                            content={post.content.rendered} />
                    )
                })}
            </div>
        );
    }
}

export default Home;

function SinglePost(props) {
    return <div key={props.idx}>
        <h3><div dangerouslySetInnerHTML={{ __html: props.title }} /></h3>
        <div dangerouslySetInnerHTML={{ __html: props.content }} />
    </div>
}