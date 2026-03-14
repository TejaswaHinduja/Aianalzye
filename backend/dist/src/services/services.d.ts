type AnalysisResult = {
    emotion: string;
    keywords: string[];
    summary: string;
};
export declare function analyzeText(text: string): Promise<AnalysisResult>;
export {};
//# sourceMappingURL=services.d.ts.map