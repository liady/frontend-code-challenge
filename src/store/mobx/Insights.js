import { makeAutoObservable } from 'mobx';

class Insights {
    insights = new Map();
    constructor() {
        makeAutoObservable(this);
    }
    createFromArray(json = []) {
        this.insights.clear();
        json.forEach((insight) =>
            this.addInsight(insight.id, insight.name, insight.severity)
        );
    }
    addInsight(id, name, severity) {
        this.insights.set(id, new Insight(name, severity));
    }
    getInsightText(insightId) {
        return this.insights.get(insightId)?.name || '';
    }
    getInsightSeverity(insightId) {
        return this.insights.get(insightId)?.severity || '';
    }
}

class Insight {
    name;
    severity;
    constructor(name, severity) {
        this.name = name;
        this.severity = severity;
    }
}

export default new Insights();
