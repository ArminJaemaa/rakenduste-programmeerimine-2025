class Task {
    constructor(id, title, created, completed = false, deleted = false, updatedAt) {
        this.id = id;
        this.title = title;
        this.created = created;
        this.completed = completed;
        this.deleted = deleted;
        this.updatedAt = updatedAt;
    }
}

module.exports = Task;
