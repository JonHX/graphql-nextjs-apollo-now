import { withRouter } from 'next/router';

/**
 * Our router to override the missing query when deploying to static export
 * This is required for page components that need access to the router
 *
 * @param {React.Component} Component
 *
 * @return {React.Component}
 */
export const withPageRouter = (Component) => {
    return withRouter(({ router, ...props }) => {
        // hacky fix for bug https://github.com/zeit/next.js/issues/4804
        const query = JSON.parse(`{"${router.asPath.split('/')[1]}":"${router.asPath.split('/')[2]}"}`)
        // replace the empty query
        router.query = query;

        return (<Component {...props} router={router} />);
    });
};
