import React from 'react'

import { Route } from 'react-router-dom'

import { Container, Row, Col } from 'reactstrap'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

import { submitPhone, submitPhoneVerification }  from '../api/verification'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {verificationState: 'init', verificationCode:''}


        this.onPhoneNumberChange = this.onPhoneNumberChange.bind(this)
        this.onSubmitButtonClick = this.onSubmitButtonClick.bind(this)
        this.onVerificationCodeChange = this.onVerificationCodeChange.bind(this)
        this.onVerificationButtonClick = this.onVerificationButtonClick.bind(this)
    }

    onPhoneNumberChange(number) {
        this.setState({'number':number})
    }

    onVerificationCodeChange(verificationCode) {
        this.setState({'verificationCode':verificationCode})
    }

    onVerificationButtonClick() {

        submitPhoneVerification(this.state.number, this.state.verificationCode).then( (result) => {

            if (result.data.validation_status == 'VALID') {

                this.setState({'verificationState':'valid'})
            } else {
                this.setState({'verificationState':'invalid'})
            }
        })
        .catch( () => { this.setState({'verificationState':'invalid'}) } )
    }

    onSubmitButtonClick() {

        submitPhone(this.state.number).then( () => {
                this.setState({verificationState:'new'})
            })
    }

    render() {

        if (this.state.verificationState === 'init') {

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
                                    <Button color="success" onClick={() => this.onSubmitButtonClick() }>Submit</Button>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                )
        } else if (this.state.verificationState === 'new') {

            return (
                <Container>
                    <Row>
                        <Col>
                                <div style={{textAlign:'center'}} >
                                <h1> Validation Code </h1>
                                <p> Please Enter the validation code you received on your phone </p>
                                </div>
                        </Col>
                    </Row>
                        <Row>
                            <Col>
                                <Form>
                                    <FormGroup>
                                      <Label for="validationCode">Validation Code</Label>
                                      <Input
                                            type="text"
                                            name="validationCode"
                                            id="validationCode"
                                            value={this.state.verificationCode}
                                            onChange={(e) => this.onVerificationCodeChange(e.target.value)}
                                            placeholder="(e.g:123456)" />
                                    </FormGroup>
                                    <Button onClick={this.onVerificationButtonClick} color="success">Submit Verification</Button>
                                </Form>
                            </Col>
                        </Row>

                </Container>


            )
        } else if (this.state.verificationState === 'valid') {
            return (

                <Container>
                    <Row>
                        <Col>
                            <h1> Your phone number is now validated </h1>
                        </Col>
                    </Row>
                </Container>
            )
        }

        else {

            return (

                <Container>
                    <Row>
                        <Col>
                            <h1> Invalid Code or non-existing phone number </h1>
                        </Col>
                    </Row>
                </Container>
            )


        }

    }

}

export default Home
