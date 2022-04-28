import React from 'react';
import { Button, Spinner } from 'react-bootstrap';

const Loading = () => {

    return (
        <section className='text-center mt-5'>
            <Button variant="primary" disabled>
                <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
                Loading...
            </Button>
        </section>
    );
};

export default Loading;