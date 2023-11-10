﻿using MongoDB.Driver;
using centy.Domain.Categories;

namespace centy.Database.Repositories;

public class CategoriesRepository : BaseRepository, ICategoriesRepository
{
    private readonly IMongoCollection<Category> _categories;

    public CategoriesRepository()
    {
        _categories = Database.GetCollection<Category>("Categories");
    }

    public async Task<List<Category>> GetUserCategoriesAsync(Guid userId)
    {
        return await _categories.Find(c => c.UserId == userId).ToListAsync();
    }

    public async Task InsertAsync(Category category)
    {
        await _categories.InsertOneAsync(category);
    }

    public async Task<bool> UpdateAsync(Category category)
    {
        var result = await _categories.ReplaceOneAsync(c => c.Id == category.Id, category,
            new ReplaceOptions { IsUpsert = true });

        return result.IsAcknowledged;
    }

    public async Task DeleteUserCategoriesAsync(List<Guid> categoryIds, Guid userId)
    {
        await _categories.DeleteManyAsync(c => categoryIds.Contains(c.Id) && c.UserId == userId);
    }
}