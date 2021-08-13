import http from 'k6/http';
import {parseHTML} from 'k6/html';
import {check, group, batch} from 'k6';

const URL = 'https://red-water-022d04b03.azurestaticapps.net/';

export default function () { //https://stackoverflow.com/questions/21117160/what-is-export-default-in-javascript
    group('Get Main Page', function () {
        let res = http.get(URL);
        let embeddedSources = getEmbeddedSource(res);
        group('Get Embedded Resources', function () { //iterate over embedded resources and download
            let parallelRequests = []
            embeddedSources.forEach(
                function (resource) {
                    if (resource.startsWith('http')) {
                        parallelRequests.push(['GET',resource])
                    } else {
                        parallelRequests.push(['GET',URL+resource])
                    }
                }
            )
            let responses = http.batch(parallelRequests)
            check(responses[0], { //check one or iterate over
                'embedded response code was 200': (res) => res.status == 200,
            });
        });
    });

}
/*
    Get all > src and link > href sources
 */
function getEmbeddedSource(res) {
    let sources = [];
    let source;
    const req_script = parseHTML(res.body);
    req_script.find('script,img,link').toArray().forEach(function (item) {
        if (item.attr('src')) {
            source = item.attr('src');
        } else if (item.attr('href')) {
            source = item.attr('href');
        }
        console.log("Source detected: " + source)
        sources.unshift(source)
    });
    return sources;
}
