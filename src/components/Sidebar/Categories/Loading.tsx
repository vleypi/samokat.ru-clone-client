import ContentLoader from "react-content-loader"

const Loading = () => {
    return (
        <ContentLoader 
            speed={2}
            width={204}
            height={40}
            viewBox="0 0 204 40"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="0" y="56" rx="3" ry="3" width="410" height="6" /> 
            <rect x="0" y="72" rx="3" ry="3" width="380" height="6" /> 
            <rect x="0" y="88" rx="3" ry="3" width="178" height="6" /> 
            <rect x="96" y="20" rx="0" ry="0" width="1" height="8" /> 
            <rect x="8" y="1" rx="6" ry="6" width="36" height="36" /> 
            <rect x="52" y="14" rx="6" ry="6" width="136" height="19" />
        </ContentLoader>
    )
}

export default Loading