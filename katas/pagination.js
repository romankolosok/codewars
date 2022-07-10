//PaginationHelper
class PaginationHelper{
    constructor(collection, itemsPerPage){
      this.collection = collection
      this.itemsPerPage = itemsPerPage
    }
    
    itemCount(){
      return this.collection.length
    }
    
    pageCount(){
      return Math.ceil(this.collection.length / this.itemsPerPage)
    }
    
    pageItemCount(index){
      let n = this.pageCount() - 1
      if(index > n) return -1
      else if(index !== n) return this.itemsPerPage
      else return this.itemCount() - n * this.itemsPerPage 
    }
    
    pageIndex(index){
      if(index > this.itemCount() - 1 || index < 0) return -1
      return Math.floor(index / this.itemsPerPage)
    }
    
  }