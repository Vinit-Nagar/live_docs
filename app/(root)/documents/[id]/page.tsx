import { Editor } from '@/components/editor/Editor'
import Header from '@/components/Header'
import React from 'react'

const Document = () => {
    return (
        <div>
            <Header>
                <div className='flex w-fit gap-2 items-center justify-center'>
                    <p className='document-title'>This is the test document</p>
                </div>
            </Header>
            <Editor />
        </div>
    )
}

export default Document
