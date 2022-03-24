import styled from "styled-components";

export const TVWrapper = styled.div`
position: relative ;
max-width: 680px;
> .cover {
    top:0;
    left:0;
    width:100% ;
    height: 100% ;
    object-fit: contain ;
    position: absolute ;
}
> .video {
    
    width: 800px;
    height: 478px;
}

`