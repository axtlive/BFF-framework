import AxtliveRequest from '../utils/AxtliveRequest'

class WorkerModel {
    getWorker(){
        return AxtliveRequest.fetch('http://localhost:10086/test/worker')
    }
}

export default WorkerModel;