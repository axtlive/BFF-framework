import AxtliveRequest from '../utils/AxtliveRequest'

class WorkerModel {
    getBooksList(){
        return AxtliveRequest.fetch('http://localhost:10086/test/worker')
    }
}

export default WorkerModel;