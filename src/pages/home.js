import React from 'react'

import { Container, Row, Col } from 'reactstrap'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

import { submitPhone, submitPhoneVerification }  from '../api/verification'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}


        this.onPhoneNumberChange = this.onPhoneNumberChange.bind(this)
        this.onSubmitButtonClick = this.onSubmitButtonClick.bind(this)
    }

    onPhoneNumberChange(number) {
        this.setState({'number':number})
    }

    onSubmitButtonClick() {

        submitPhone(this.state.number).then( () => {
            // navigate to other page and give the phone as parameter
            console.log(`navigate to other page : ${this.state.number}`)
            })
    }

    render() {
        return (
                <Container>
                    <Row>
                        <Col>
							<div style={{textAlign:'center'}} >
                            <h1> Phone Verification Form</h1>
                            <p> please enter a valid phone number to verify </p>
							</div>
                        </Col>
                    </Row>
					<Row>
						<Col>
							<Form>
                                <FormGroup>
                                  <Label for="phoneNumber">Phone Number</Label>
                                  <Input
                                        onChange={(e) => this.onPhoneNumberChange(e.target.value)}
                                        type="text"
                                        name="phoneNumber"
                                        id="phoneNumber"
                                        placeholder="(e.g:+15147174993)" />
                                </FormGroup>
                                <Button onClick={() => this.onSubmitButtonClick() }>Submit</Button>
                            </Form>
						</Col>
					</Row>
                </Container>
            )
    }

}

export default Home
