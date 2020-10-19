import React from 'react'
import FeedPageCard from './FeedPageCard'
import FeedPagePost from './FeedPagePost'
import { ContPage } from './styled'

const FeedPage = () => {
    return(
        <ContPage>
            <FeedPagePost/>
            <FeedPageCard/>

        </ContPage>
    )
}

export default FeedPage
