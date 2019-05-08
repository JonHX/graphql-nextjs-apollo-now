import App, { Container } from 'next/app'
import Head from 'next/head'
import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { Header } from '../components'
import withApolloClient from '../lib/with-apollo-client'
import { assetsUrl } from '../config'

class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props
    return (
      <Container className="container">
        <Head>
          <React.Fragment>
            <title>Star Wars Wiki | GraphQL | NextJS</title>
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href={`${assetsUrl}/favicon-32x32.png`}
            />
            <link
              rel="stylesheet"
              href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"
            />
          </React.Fragment>
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
