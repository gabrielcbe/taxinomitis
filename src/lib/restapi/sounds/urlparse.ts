// external dependencies
import * as Express from 'express';
import * as uuid from 'uuid/v4';
// local dependencies
import * as Types from '../../objectstore/types';
import * as urls from '../../restapi/urls';



export function soundUrl(req: Express.Request): Types.ObjectSpec {
    return {
        classid : req.params.classid,
        userid : req.params.studentid,
        projectid : req.params.projectid,
        objectid : req.params.soundid,
    };
}

export function soundsUrl(req: Express.Request): Types.ObjectSpec {
    return {
        classid : req.params.classid,
        userid : req.params.studentid,
        projectid : req.params.projectid,
        objectid : uuid(),
    };
}

// export function projectUrl(req: Express.Request): Types.ProjectSpec {
//     return {
//         classid : req.params.classid,
//         userid : req.params.studentid,
//         projectid : req.params.projectid,
//     };
// }

// export function userUrl(req: Express.Request): Types.UserSpec {
//     return {
//         classid : req.params.classid,
//         userid : req.params.studentid,
//     };
// }

// export function classUrl(req: Express.Request): Types.ClassSpec {
//     return {
//         classid : req.params.classid,
//     };
// }

export function createSoundUrl(params: Types.ObjectSpec): string {
    return urls.SOUND
            .replace(':classid', params.classid)
            .replace(':studentid', params.userid)
            .replace(':projectid', params.projectid)
            .replace(':soundid', params.objectid);
}
