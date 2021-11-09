import React from 'react';
import {Formik} from 'formik'

const HomePage = () => {
    return (
        <div>
            <Formik initialValues={{email: ''}} onSubmit={(data) => {
                console.log(data)
            }}>
                {({values, handleChange,handleBlur,handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <input
                            name={'email'}
                            type="text"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}/>
                        <div>
                            <button type={'submit'}>
                                Login
                            </button>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default HomePage;