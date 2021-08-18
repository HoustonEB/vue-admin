import { request } from '@/utils/request';

export function getUserInfo() {
    // return request.get('/user-info', {
    //     name: 'admin'
    // }).then(res => {
    //     if(res.code === 0) {
    //         console.log(res, 'res')
    //     }
    // })
    return Promise.resolve([
        {
            name: 'home',
            url: 'home',
            id: '0',
            children: [
                { name: 'home1', url: 'home-1', id: '0-1' },
                {
                    name: 'home2',
                    url: 'home-2',
                    id: '0-2',
                    children: [
                        {
                            name: 'home2-1',
                            url: 'home-2-1',
                            id: '0-2-1',
                            children: [{
                                name: 'home2-1-1',
                                url: 'home-2-1-1',
                                id: '0-2-1-1',
                                children: [{ name: 'home2-1-1-1', url: 'home-2-1-1-1', id: '0-2-1-1-1' }]
                            }]
                        }
                    ]
                },
            ]
        },
        { name: '导航1', url: 'navigator-1', id: '2' },
        { name: '导航2', url: 'navigator-2', id: '3' }
    ])
}

