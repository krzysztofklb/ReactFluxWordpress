import DataStore from 'flux/stores/DataStore.js'

class RenderedPage extends React.Component {
    render() {
        let pageData = DataStore.getPageBySlug(this.props.slug);
        // console.log(pageData);
        return (
            <div>
                <h1>{pageData.title.rendered}</h1>

                <SinglePost key={pageData.id} idx={pageData.id} title={pageData.title.rendered}
                    content={pageData.content.rendered} />
                )

            </div>
        );
    }
}

export default RenderedPage;

function SinglePost(props) {
    return <div key={props.idx}>
        <h3><div dangerouslySetInnerHTML={{ __html: props.title }} /></h3>
        <div dangerouslySetInnerHTML={{ __html: props.content }} />
    </div>
}