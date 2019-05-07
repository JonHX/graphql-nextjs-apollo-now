import App, { Container } from 'next/app'
import Head from 'next/head'
import React from 'react'
import { Header } from '../components/'
import withApolloClient from '../lib/with-apollo-client'
import { ApolloProvider } from 'react-apollo'

class MyApp extends App {
  render () {
    const { Component, pageProps, apolloClient } = this.props
    return (
      <Container className='container'>
        <Head>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
        </Head>
        <ApolloProvider client={apolloClient}>
          <Header />
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    )
  }
}

export default withApolloClient(MyApp)
