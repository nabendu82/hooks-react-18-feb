import React from 'react'
import { ChannelContext, UserContext } from '../App'

const Child = () => {
    return (
        <div>
            <UserContext.Consumer>
                {user => {
                    return (
                        <ChannelContext.Consumer>
                            {channel => {
                                return <h1>Chilc Component - {user}. Channel is {channel}</h1>
                            }}
                        </ChannelContext.Consumer>
                    )
                }}
            </UserContext.Consumer>
        </div>
    )
}

export default Child